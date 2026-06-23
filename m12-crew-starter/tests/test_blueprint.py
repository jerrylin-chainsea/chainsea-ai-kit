"""無需 API key 的測試：驗證「格式藍圖」能正確接住 AI 應交出的欄位。"""
from src.blueprint import Decision


def test_decision_blueprint_accepts_valid_output():
    d = Decision(
        insight="外送訂單明顯成長",
        anomalies=["原味鍋貼出現負數銷量"],
        risk_level="medium",
        action_items=["人工確認 6/2 的負數紀錄"],
    )
    assert d.risk_level == "medium"
    assert d.anomalies and isinstance(d.anomalies, list)


def test_decision_blueprint_defaults_empty_lists():
    d = Decision(insight="生意平穩", risk_level="low")
    assert d.anomalies == []
    assert d.action_items == []
