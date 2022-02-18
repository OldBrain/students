package ru.avbugorov.students.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.avbugorov.students.dto.ErrorDto;
import ru.avbugorov.students.exceptions.NotFoundException;
import ru.avbugorov.students.exceptions.NulDataException;
import ru.avbugorov.students.models.Student;
import ru.avbugorov.students.services.ExceptionService;
import ru.avbugorov.students.services.StudentService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*")
public class StudentController {

    private final StudentService studentService;
    private final ExceptionService exceptionService;


    @GetMapping()
    public List<Student> getAll() {
        return studentService.findAll();
    }

    @GetMapping("/{id}")
    public Student getById(@PathVariable Long id) {
        if (id == null) {
            throw new NotFoundException("Null ID=");
        }
        return studentService.
                finById(id).
                orElseThrow(() -> new NotFoundException("Нет студента с ID=" + id));
    }

    @DeleteMapping("del/{id}")
    public void deleteById(@PathVariable Long id) {
        studentService.deleteById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student create(@RequestBody Student student) {
        if (student.getName() == null || student.getAge() == null) {
            throw new NulDataException("Не заполнены данные о студенте");
        }
        if (student.getId() != null) {
            throw new IllegalArgumentException("Id non null");
        }
        return studentService.create(student);
    }

    @PutMapping
    public Student update(@RequestBody Student student) {
        if (!studentService.finById(student.getId()).isPresent()) {
            throw new NotFoundException("Not found student  ID=" + student.getId());
        }
        return studentService.create(student);
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorDto notFoundExceptionHandler(NotFoundException exception) {
        return new ErrorDto(exception.getMsg());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorDto illegalArgumentsException(IllegalArgumentException exception) {
        return new ErrorDto(exception.getMessage());
    }


    @ExceptionHandler
    @ResponseStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
    public ErrorDto illegalStateException(IllegalStateException exception) {
        return new ErrorDto(exception.getMessage());
    }
}
