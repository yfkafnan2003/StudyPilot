from app.schemas.user import UserCreate, UserLogin, UserResponse
from app.schemas.subject import SubjectCreate, SubjectUpdate, SubjectResponse
from app.schemas.document import DocumentCreate, DocumentResponse
from app.schemas.quiz import QuizCreate, QuizResponse, QuizSubmit
from app.schemas.question import QuestionCreate, QuestionResponse
from app.schemas.flashcard import FlashcardCreate, FlashcardResponse
from app.schemas.planner_task import (
    PlannerTaskCreate,
    PlannerTaskUpdate,
    PlannerTaskResponse,
)
from app.schemas.study_progress import (
    StudyProgressCreate,
    StudyProgressResponse,
)

__all__ = [
    "UserCreate",
    "UserLogin",
    "UserResponse",
    "SubjectCreate",
    "SubjectUpdate",
    "SubjectResponse",
    "DocumentCreate",
    "DocumentResponse",
    "QuizCreate",
    "QuizResponse",
    "QuizSubmit",
    "QuestionCreate",
    "QuestionResponse",
    "FlashcardCreate",
    "FlashcardResponse",
    "PlannerTaskCreate",
    "PlannerTaskUpdate",
    "PlannerTaskResponse",
    "StudyProgressCreate",
    "StudyProgressResponse",
]
