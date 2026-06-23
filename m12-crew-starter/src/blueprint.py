"""格式藍圖：規定 AI 的分析結果「長什麼樣」，確保每次輸出都可被信任、可被使用。

（這就是課堂講的「格式藍圖」。底層用的是 Pydantic，但你不需要懂這個詞——
 只要知道：下面每一欄就是我們要求 AI 一定要交出來的東西。）
"""
from pydantic import BaseModel, Field


class Decision(BaseModel):
    insight: str = Field(description="一句話總結：最近生意的關鍵發現")
    anomalies: list[str] = Field(default_factory=list, description="資料裡看起來怪怪、需要人確認的地方")
    risk_level: str = Field(description="風險高低：low / medium / high")
    action_items: list[str] = Field(default_factory=list, description="建議管理者採取的具體行動")
