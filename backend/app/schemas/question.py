from pydantic import BaseModel, ConfigDict, Field


class QuestionCreate(BaseModel):
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_answer: str = Field(pattern="^[ABCD]$")
    explanation: str | None = None
    quiz_id: int


class QuestionResponse(BaseModel):
    id: int
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_answer: str
    explanation: str | None
    quiz_id: int

    model_config = ConfigDict(from_attributes=True)
