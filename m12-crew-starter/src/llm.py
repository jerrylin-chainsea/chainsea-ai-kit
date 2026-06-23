"""runtime 降級鏈：依序嘗試免費來源；某一把 key 沒設或額度滿就換下一把。

教學提醒：先在 coding agent 對話框把 prompt 改對，再跑完整 crew，可大幅省下免費額度。
"""
import os
from crewai import LLM


def make_llm() -> LLM:
    # Minimax（國際站，OpenAI 相容端點）：設了 MINIMAX_API_KEY 就優先用最新的 M3
    mm = os.getenv("MINIMAX_API_KEY")
    if mm:
        return LLM(
            model="openai/" + os.getenv("MINIMAX_MODEL", "MiniMax-M3"),
            base_url=os.getenv("MINIMAX_BASE_URL", "https://api.minimax.io/v1"),
            api_key=mm,
        )
    # 主用 GitHub Models（用課前建立的 PAT，需 models 權限；
    # 注意：不是 Codespaces 內建的 GITHUB_TOKEN，那把不能打 Models API）
    gh = os.getenv("GITHUB_MODELS_TOKEN") or os.getenv("GITHUB_API_KEY")
    if gh:
        os.environ["GITHUB_API_KEY"] = gh
        return LLM(model="github/gpt-4o-mini")
    if os.getenv("GROQ_API_KEY"):
        # max_rpm 是保護免費額度的保險；太低會中斷，10 較平衡
        return LLM(model="groq/llama-3.3-70b-versatile", max_rpm=10)
    if os.getenv("CEREBRAS_API_KEY"):
        return LLM(model="cerebras/llama-3.3-70b")  # 舊的 llama3.1-70b 已 deprecated
    if os.getenv("GEMINI_API_KEY"):
        return LLM(model="gemini/gemini-flash-lite-latest")  # 用 alias，避免 dated id 失效
    raise RuntimeError("NO_KEY")  # run.py 會接住並印出白話檢核清單
