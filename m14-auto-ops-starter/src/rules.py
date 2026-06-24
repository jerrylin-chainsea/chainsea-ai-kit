"""M14 護欄:AI 自動經營的「能自己做 vs 要升級給人」規則(human-on-the-loop)。

模型(每個狀況都兩段):
  ① 止血  → 一律「自動」做(先讓錯誤停止擴大:撤下/設售完/暫停,都是低風險)。
  ② 後續  → 低風險自動做;高風險(花大錢/對外道歉/動到顧客)自動「升級」給人核准。

學員主要改這份:把你店裡的狀況與紅線寫進來。風險判斷故意用規則(不交給 AI),
這樣紅線是你定的、可稽核;偵測與措辭才交給 AI。
"""

# 每種狀況的「止血動作」(一律自動)
STOP = {
    "stockout":    "把該品項先設『售完』",
    "wrongprice":  "把錯價那頁先撤下",
    "surge":       "暫停吃不下的那個通路",
    "bad_ai":      "暫停採用這個 AI 建議",
    "refund_spike":"先凍結自動退款",
    "complaint":   "先用罐頭訊息安撫",
}
# 每種狀況的「後續動作」與風險(low=自動, high=升級給人)
FOLLOWUP = {
    "stockout":    ("自動補貨",              "low"),
    "surge":       ("自動加開外送線",         "low"),
    "bad_ai":      ("要求附依據,沒有就不採用","low"),
    "wrongprice":  ("發更正並決定補償",       "high"),
    "refund_spike":("決定退款政策",           "high"),
    "complaint":   ("正式回應顧客",           "high"),
}

def handle(kind):
    """回傳:止血動作、後續動作、後續風險、後續是否可自動。"""
    stop = STOP.get(kind, "先止血、停止錯誤擴大")
    followup, risk = FOLLOWUP.get(kind, ("轉人工判斷", "high"))
    return stop, followup, risk, (risk == "low")
