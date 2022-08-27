from datetime import datetime as dt

from sqlalchemy.orm import Session

from . import models, schemas


def get_user(db: Session, id: int):
    return db.query(models.User).filter(models.User.id == id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int=0, limit: int=100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    created = dt.now()
    db_user = models.User(
        name=user.name,
        email=user.email,
        password=user.password,
        created=created,
        edited=created,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_recipe(db: Session, id: int):
    return db.query(models.Recipe).filter(models.Recipe.id == id).first()

    
def get_recipes(db: Session, skip: int=0, limit: int=100):
    return db.query(models.Recipe).offset(skip).limit(limit).all()


def create_recipe(db: Session, recipe: schemas.RecipeCreate, user_id: int):
    created = dt.now()
    db_recipe = models.Recipe(
        **recipe.dict(),
        user_id=user_id,
        created=created,
        edited=created,
    )
    db.add(db_recipe)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe
