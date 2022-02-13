package ru.avbugorov.students.dto;

import java.time.LocalDateTime;

public class ErrorDto {
    LocalDateTime localDateTime;
    final String HEADER_MSG = "The Student portal said: ";
    String msg;

    public ErrorDto() {
    }

    public ErrorDto(String msg) {
        this.msg = HEADER_MSG + LocalDateTime.now().toString() + " " + msg;
    }

    public String getMsg() {
        return msg;
    }
}
