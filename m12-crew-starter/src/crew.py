"""三角色決策助理：資料檢查員 → 分析洞察員 → 決策摘要員。

學員主要改下面三段角色的文字（role / goal / backstory），用對話框請 agent 幫你改即可。
"""
from crewai import Agent, Task, Crew, Process
from .llm import make_llm
from .blueprint import Decision


def build_crew(data_text: str) -> Crew:
    llm = make_llm()

    checker = Agent(
        role="資料檢查員",
        goal="找出資料裡缺漏或異常的地方，不做分析",
        backstory="你謹慎細心，只負責確認資料能不能信任。",
        llm=llm, verbose=True,
    )
    analyst = Agent(
        role="分析洞察員",
        goal="根據檢查過的資料，找出趨勢與風險",
        backstory="你是資深營運分析師，重視依據，不憑空猜測。",
        llm=llm, verbose=True,
    )
    advisor = Agent(
        role="決策摘要員",
        goal="把洞察整理成管理者能直接行動的建議",
        backstory="你是 CEO 的決策助理，講重點、附依據。",
        llm=llm, verbose=True,
    )

    t1 = Task(
        description=f"檢查以下營運資料的缺漏與異常，只標問題、不做分析：\n{data_text}",
        expected_output="條列資料品質問題（例如負數、極端值、缺欄位）",
        agent=checker,
    )
    t2 = Task(
        description="根據前一步的檢查結果，分析趨勢、異常與風險。",
        expected_output="一段分析洞察，每個結論都要有資料依據",
        agent=analyst, context=[t1],
    )
    t3 = Task(
        description="把洞察整理成決策摘要，務必符合格式藍圖。",
        expected_output="符合 Decision 格式藍圖的決策建議",
        agent=advisor, context=[t2], output_pydantic=Decision,
    )

    return Crew(
        agents=[checker, analyst, advisor],
        tasks=[t1, t2, t3],
        process=Process.sequential,
        verbose=True,
    )
