"""M14 ｜ AI 自動經營(auto-ops):偵測狀況 → 自己止血+處置低風險 → 高風險升級給人 → 記日誌。

跑法:python run.py   (純規則,不需金鑰即可跑)
這就是 M12 的進化:M12 給建議、人決定;M14 由 agent 自己動手,人只設規則、守紅線、看日誌。
"""
import csv, json
from pathlib import Path
from src.rules import handle

def main():
    events = list(csv.DictReader(open("events_sample.csv", encoding="utf-8")))
    log, queue = [], []
    print("===== AI 自動經營日誌 =====")
    for ev in events:
        t, kind, detail = ev["time"], ev["kind"], ev["detail"]
        stop, followup, risk, auto = handle(kind)
        print(f"\n[{t}] 偵測:{detail}")
        print(f"   ① 止血(自動):{stop}  ✓")
        if auto:
            print(f"   ② {followup}(低風險,自動):已自動處理  ✓")
            log.append(f"[{t}] {detail} → 自動止血 + {followup}")
        else:
            print(f"   ② {followup}(高風險)→ ⏫ 升級給人核准")
            log.append(f"[{t}] {detail} → 自動止血,後續升級給人")
            queue.append({"time": t, "event": detail, "needs_human": followup})

    Path("approval_queue.json").write_text(
        json.dumps(queue, ensure_ascii=False, indent=2), encoding="utf-8")
    auto_n = len(events) - len(queue)
    print(f"\n本班共 {len(events)} 件:自動處置 {auto_n} 件、升級給人 {len(queue)} 件(待核准已寫入 approval_queue.json)。")

    # 自我檢查:human-on-the-loop 一定同時有「自動」與「升級」兩種,才算對
    assert auto_n >= 1 and len(queue) >= 1, "規則異常:應同時存在自動處置與升級給人"
    print("✓ 模型正確:小事自動處置、高風險升級給人。")

if __name__ == "__main__":
    main()
