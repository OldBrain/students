package ru.avbugorov.students.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.avbugorov.students.models.Student;
import ru.avbugorov.students.repositories.StudentsRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentsRepository studentsRepository;

    public List<Student> findAll() {
        return studentsRepository
                .findAll();
    }

    public Optional<Student> finById(Long id) {
        return studentsRepository.findById(id);
    }

    public void deleteById(Long id) {
        studentsRepository.deleteById(id);
    }

    public Student create(Student student) {
        return studentsRepository.save(student);
    }

}
