package ru.avbugorov.students.services;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import ru.avbugorov.students.dto.ErrorDto;
import ru.avbugorov.students.exceptions.NotFoundException;

@Service
public class ExceptionService {
    public ErrorDto notFoundExceptionHandler(NotFoundException exception) {
        return new ErrorDto(exception.getMessage());
    }

    public ErrorDto illegalArgumentsException(NotFoundException exception) {
        return new ErrorDto(exception.getMessage());
    }
}
