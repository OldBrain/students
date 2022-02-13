package ru.avbugorov.students.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.avbugorov.students.models.Student;

@Repository
public interface StudentsRepository extends JpaRepository<Student, Long> {

}