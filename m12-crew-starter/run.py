"""一鍵跑：讀範例資料 → 三角色 crew → 印出決策摘要。報錯轉成白話檢核清單。"""
from pathlib import Path
from dotenv import load_dotenv
from src.crew import build_crew

CHECK = """
⚠️ 還沒準備好可用的 AI 金鑰。請依序檢查（這不是程式壞掉，是設定還沒完成）：
  1. 有沒有在 Codespaces Secrets 設好金鑰？（GITHUB_MODELS_TOKEN 或 GROQ_API_KEY…）
  2. 設完有沒有「Manage access」勾選這個專案？
  3. 設完有沒有「重新整理 / 重開 Codespace」讓金鑰生效？
"""


def main():
    load_dotenv()
    data = Path("data/sales_sample.csv").read_text(encoding="utf-8")
    try:
        result = build_crew(data).kickoff()
    except RuntimeError as e:
        if "NO_KEY" in str(e):
            print(CHECK)
            return
        raise
    print("\n===== 決策摘要 =====")
    print(result.pydantic.model_dump_json(indent=2) if result.pydantic else result.raw)


if __name__ == "__main__":
    main()
