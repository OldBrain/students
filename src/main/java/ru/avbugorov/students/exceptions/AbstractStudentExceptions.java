package ru.avbugorov.students.exceptions;

public abstract class AbstractStudentExceptions extends RuntimeException{
    String msg;
    public AbstractStudentExceptions(String message) {
        this.msg = message;
    }

    public String getMsg() {
        return msg;
    }
}
