import '../global.css';
import './classes.css';
import React, { useState, useEffect } from 'react';
import BoxTarget from './BoxTarget';
import Classes from './Classes';

const TOOL = 'classes';

const Semester = ({ season, year, classes = [], onRemoveFromPreviousSemester , semesterKey, semesters}) => {
  const [droppedClasses, setDroppedClasses] = useState([]);

  useEffect(() => {
    setDroppedClasses(classes);
  }, [classes]);

  const handleDrop = (item) => {
    console.log('in handle drop function for: ' + item.course_code);
    console.log('Trying to Drop ' + item.course_code + ' into ' + semesterKey);
    const { course_code, name, prerequisites = [], corequisites = [] } = item;
  
    // Calculate semester order based on semester names
    const semesterOrder = {};
    Object.keys(semesters).forEach((semesterName, index) => {
      semesterOrder[semesterName] = index;
    });
  
    // Check if all prerequisites are met in the previous semesters
    const prereqsSatisfied = prerequisites.every((prereq) =>
      Object.entries(semesters).some(([semesterName, semesterClasses]) =>
        semesterOrder[semesterName] < semesterOrder[semesterKey] &&
        semesterClasses.some((classItem) => classItem.course_code === prereq)
      )
    );
    console.log('Prereqs satisfied: ' + prereqsSatisfied);
  
    // Check if corequisites are met in the previous semesters or the destination semester
    const coreqsSatisfied = corequisites.every((coreq) =>
      Object.entries(semesters).some(([semesterName, semesterClasses]) =>
        (semesterOrder[semesterName] <= semesterOrder[semesterKey] &&
          semesterClasses.some((classItem) => classItem.course_code === coreq)) ||
        (semesterName === semesterKey &&
          [...droppedClasses, item].some((classItem) => classItem.course_code === coreq))
      )
    );
    console.log('Coreqs satisfied: ' + coreqsSatisfied);
  
    // Check prerequisites and corequisites of non-moved classes related to the moved class
    const relatedClassesConditionsSatisfied = Object.entries(semesters).every(
      ([semesterName, semesterClasses]) =>
        semesterClasses.every((classItem) => {
          if (classItem.course_code !== course_code) {
            const isPrereqSatisfied =
              !classItem.prerequisites.includes(course_code) ||
              (semesterOrder[semesterName] > semesterOrder[semesterKey] &&
                Object.entries(semesters).some(
                  ([prevSemesterName, prevSemesterClasses]) =>
                    semesterOrder[prevSemesterName] < semesterOrder[semesterName] &&
                    (prevSemesterName === semesterKey ||
                      prevSemesterClasses.some(
                        (prevClassItem) => prevClassItem.course_code === course_code
                      ))
                ));
  
            const isCoreqSatisfied =
              !classItem.corequisites.includes(course_code) ||
              semesterName === semesterKey ||
              semesterOrder[semesterName] < semesterOrder[semesterKey];
  
            return isPrereqSatisfied && isCoreqSatisfied;
          }
          return true;
        })
    );
  
    if (prereqsSatisfied && coreqsSatisfied && relatedClassesConditionsSatisfied) {
      setDroppedClasses([...droppedClasses, {course_code, name, prerequisites, corequisites}]);
      console.log('Keeping ' + course_code + ' in ' + semesterKey + ' and deleting from other semesters')
      onRemoveFromPreviousSemester(course_code, semesterKey, item);
    } else {
      alert('Prerequisites or corequisites are not satisfied, or the class is a prerequisite or corequisite for another class!');
    }
  };

  const removeClassFromSemester = (courseCode) => {
    console.log('removing a class from a semester!!!')
    setDroppedClasses(droppedClasses.filter((classItem) => classItem.course_code !== courseCode));
  };

  return (
    <div className='semester'>
      <div className='semseter-header-container'>
        <p className='semesterHeader generalFont'>{season} {year}</p>
      </div>
      <BoxTarget onDrop={handleDrop}>
        {droppedClasses.map((classItem) => (
          <Classes
            key={classItem.course_code}
            course_code={classItem.course_code}
            name={classItem.name}
            prerequisites={classItem.prerequisites}
            corequisites={classItem.corequisites}
            onRemove={() => removeClassFromSemester(classItem.course_code)}
          />
        ))}
      </BoxTarget>
    </div>
  );
};

export default Semester;