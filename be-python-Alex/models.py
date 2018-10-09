from sqlalchemy import Column, create_engine, Integer, String, ForeignKey, DateTime, func
from sqlalchemy.orm import (scoped_session, sessionmaker, relationship,
                            backref)
from sqlalchemy.ext.declarative import declarative_base
from pyodbc import *
import urllib

params = urllib.parse.quote_plus("DRIVER={SQL Server Native Client 11.0};"
                                    "SERVER=CL-SQL;"
                                    "DATABASE=callab;"
                                    "UID=app_mudcats;"
                                    "PWD=MudCat$;")
engine = create_engine("mssql+pyodbc:///?odbc_connect={}".format(params))
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))

Base = declarative_base()
# We will need this for querying
Base.query = db_session.query_property()


class Department(Base):
    __tablename__ = 'department'
    id = Column(Integer, primary_key=True)
    name = Column(String)


class Employee(Base):
    __tablename__ = 'employee'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    hiredOn = Column(DateTime, default=func.now())
    departmentId = Column(Integer)