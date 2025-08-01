document.addEventListener('DOMContentLoaded', () => {
    // Definición de los ramos por semestre
    const semesters = {
        "Semestre 1": [
            "Biología básica", "Laboratorio de biología básica", "Orientación institucional",
            "Introducción a la filosofía", "Física básica", "Laboratorio de física",
            "Lengua Española Básica I", "Matemática Básica", "Química Básica",
            "Introducción a las ciencias sociales"
        ],
        "Semestre 2": [
            "Biofísica", "Laboratorio de biofísica", "Educación física",
            "Fundamentos de Historia Social Dominicana", "Lengua Española Básica II",
            "Fundamentos de Desarrollo Cognitivo", "Química Orgánica", "Vida en Comunidad"
        ],
        "Semestre 3": [
            "Estructura y sistemas anatómicos", "Laboratorio de estructura y sistemas anatómicos",
            "Fundamentos de ética general", "Antropología aplicada en medicina",
            "Historia de la cultura universal", "Inglés técnico en salud I",
            "Introducción a la informática", "Bases para el análisis biométrico"
        ],
        "Semestre 4": [
            "Fisiología celular", "Bases histológicas del organismo",
            "Laboratorio bases histológicas del organismo", "Inglés técnico en salud II",
            "Salud y conducta humana", "Laboratorio de salud y conducta humana",
            "Introducción a la metodología investigación en salud",
            "Fundamentos de soporte vital básico", "Tecnología información e investigación en salud"
        ],
        "Semestre 5": [
            "Genética médica", "Laboratorio genética médica", "Bioquímica I",
            "Laboratorio bioquímica I", "Embriología",
            "Histología grl del org y sist human",
            "Laboratorio de Histología grl del org y sist human", "Anatomía humana I",
            "Laboratorio de anatomía humana I", "Introducción a la clínica", "Microbiología",
            "Laboratorio de microbiología", "Promoción en salud"
        ],
        "Semestre 6": [
            "Bioquímica II", "Laboratorio de bioquímica II", "Fisiología humana I",
            "Laboratorio de fisiología humana I", "Anatomía humana II",
            "Laboratorio de anatomía humana II", "Psicología médica", "Semiología Médica",
            "Laboratorio semiología médica", "Parasitología", "Salud colectiva",
            "Laboratorio salud colectiva"
        ],
        "Semestre 7": [
            "Fisiopatología I", "Fisiología humana II", "Laboratorio fisiología humana II",
            "Anatomía patológica I", "Laboratorio anatomía patológica I", "Neuroanatomía",
            "Laboratorio Neuroanatomía", "Semiología quirúrgica",
            "Laboratorio semiología quirúrgica", "Epidemiología", "Laboratorio epidemiología",
            "Gerencia y políticas de salud"
        ],
        "Semestre 8": [
            "Inmunología general", "Fisiopatología II", "Laboratorio fisiopatología II",
            "Farmacología", "Laboratorio farmacología", "Anatomía patológica II",
            "Laboratorio anatomía patológica II", "Sexología médica", "Asignatura optativa",
            "Evolución sociohistórica medica"
        ],
        "Semestre 9": [
            "Imagenología", "Hematología médica", "Laboratorio hematología médica",
            "Farmacoterapeutica", "Laboratorio farmacoterapeutica", "Cirugía general",
            "Infectología", "Asignatura optativa", "Bioética y normativas en salud"
        ],
        "Semestre 10": [
            "Endocrinología", "Laboratorio endocrinología", "Nefrología", "Psiquiatría",
            "Laboratorio psiquiatría", "Dermatología", "Oftalmología",
            "Laboratorio oftalmología", "Neurología", "Laboratorio neurología",
            "Cardiología", "Laboratorio cardiología", "Pneumopatología",
            "Laboratorio pneumopatología", "Gastroenterología",
            "Laboratorio gastroenterología", "Medicina forense", "Laboratorio medicina forense"
        ],
        "Semestre 11": [
            "Nutrición", "Neurocirugía", "Anestesiología", "Otorrinolaringología",
            "Laboratorio otorrinolaringología", "Traumatología y ortopedia",
            "Laboratorio traumatología y ortopedia", "Urología", "Laboratorio urología",
            "Oncología", "Asignatura optativa"
        ],
        "Semestre 12 - PREINTERNADO": [
            "Pediatría y neonatología", "Gineco-obstetricia", "Emergencias médicas",
            "Metodología de la investigación en salud", "Optativas", "Toxicología grl",
            "Introducción terapia en pareja y familiar", "Medicina de urgencias y desastres",
            "Genética clínica", "Sustancias psicoactivas y adic", "Medicina del deporte",
            "Medicina física y rehabilitación", "Salud ocupacional y ambiental",
            "Internado rotatorio", "Clínica médico psiquiátrica", "Clínica pediátrica",
            "Clínica gineco-obstétrica", "Salud pública", "Medicina quirúrgica y traumatología",
            "Medicina interna"
        ]
    };

    // Definición de los requisitos para cada ramo
    const requirements = {
        "Biofísica": ["Biología básica", "Laboratorio de biología básica", "Física básica", "Laboratorio de física"],
        "Laboratorio de biofísica": ["Biología básica", "Laboratorio de biología básica", "Física básica", "Laboratorio de física"],
        "Lengua Española Básica II": ["Lengua Española Básica I"],
        "Química Orgánica": ["Química Básica"], // Asumimos que el laboratorio se imparte junto o no es un requisito estricto
        "Laboratorio de química orgánica": ["Química Básica"],
        "Vida en Comunidad": ["Introducción a las ciencias sociales"],
        "Estructura y sistemas anatómicos": ["Biología básica", "Laboratorio de biología básica"],
        "Laboratorio de estructura y sistemas anatómicos": ["Biología básica", "Laboratorio de biología básica"],
        "Fundamentos de ética general": ["Introducción a la filosofía"],
        "Antropología aplicada en medicina": ["Introducción a las ciencias sociales"],
        "Historia de la cultura universal": ["Fundamentos de Historia Social Dominicana"],
        "Inglés técnico en salud I": ["Lengua Española Básica II"],
        "Introducción a la informática": ["Matemática Básica"],
        "Bases para el análisis biométrico": ["Matemática Básica"],
        "Fisiología celular": ["Química Orgánica", "Biología básica", "Laboratorio de biología básica", "Biofísica", "Laboratorio de biofísica"],
        "Bases histológicas del organismo": ["Biología básica", "Laboratorio de biología básica"],
        "Laboratorio bases histológicas del organismo": ["Biología básica", "Laboratorio de biología básica"],
        "Inglés técnico en salud II": ["Inglés técnico en salud I"],
        "Salud y conducta humana": ["Introducción a las ciencias sociales"],
        "Laboratorio de salud y conducta humana": ["Introducción a las ciencias sociales"],
        "Fundamentos de soporte vital básico": ["Estructura y sistemas anatómicos", "Laboratorio de estructura y sistemas anatómicos"],
        "Tecnología información e investigación en salud": ["Introducción a la informática"],
        "Genética médica": ["Biología básica", "Laboratorio de biología básica", "Química Orgánica", "Fisiología celular"],
        "Laboratorio genética médica": ["Biología básica", "Laboratorio de biología básica", "Química Orgánica", "Fisiología celular"],
        "Bioquímica I": ["Biología básica", "Laboratorio de biología básica", "Química Orgánica"],
        "Laboratorio bioquímica I": ["Biología básica", "Laboratorio de biología básica", "Química Orgánica"],
        "Promoción en salud": ["Introducción a la clínica"],
        "Bioquímica II": ["Bioquímica I", "Laboratorio bioquímica I"],
        "Laboratorio de bioquímica II": ["Bioquímica I", "Laboratorio bioquímica I"],
        "Fisiología humana I": ["Fisiología celular", "Biofísica"],
        "Laboratorio de fisiología humana I": ["Fisiología celular", "Biofísica"],
        "Anatomía humana II": ["Anatomía humana I", "Laboratorio de anatomía humana I"],
        "Laboratorio de anatomía humana II": ["Anatomía humana I", "Laboratorio de anatomía humana I"],
        "Psicología médica": ["Salud y conducta humana", "Laboratorio de salud y conducta humana"],
        "Parasitología": ["Microbiología", "Anatomía humana I", "Laboratorio de anatomía humana I"],
        "Salud colectiva": ["Introducción a las ciencias sociales"],
        "Laboratorio salud colectiva": ["Introducción a las ciencias sociales"],
        "Fisiopatología I": ["Fisiología humana I", "Laboratorio de fisiología humana I", "Bioquímica II", "Laboratorio de bioquímica II"],
        "Fisiología humana II": ["Fisiología humana I", "Laboratorio de fisiología humana I"],
        "Laboratorio fisiología humana II": ["Fisiología humana I", "Laboratorio de fisiología humana I"],
        "Anatomía patológica I": ["Anatomía humana II", "Laboratorio de anatomía humana II"],
        "Laboratorio anatomía patológica I": ["Anatomía humana II", "Laboratorio de anatomía humana II"],
        "Neuroanatomía": ["Anatomía humana II", "Laboratorio de anatomía humana II"],
        "Laboratorio Neuroanatomía": ["Anatomía humana II", "Laboratorio de anatomía humana II"],
        "Semiología quirúrgica": ["Semiología Médica", "Laboratorio semiología médica"],
        "Laboratorio semiología quirúrgica": ["Semiología Médica", "Laboratorio semiología médica"],
        "Epidemiología": ["Salud colectiva", "Laboratorio salud colectiva"],
        "Laboratorio epidemiología": ["Salud colectiva", "Laboratorio salud colectiva"],
        "Gerencia y políticas de salud": ["Salud colectiva", "Laboratorio salud colectiva"],
        "Inmunología general": ["Bioquímica II", "Laboratorio de bioquímica II", "Anatomía humana II", "Laboratorio de anatomía humana II"],
        "Fisiopatología II": ["Fisiopatología I"],
        "Laboratorio fisiopatología II": ["Fisiopatología I"],
        "Farmacología": ["Bioquímica II", "Laboratorio de bioquímica II", "Fisiología humana II", "Laboratorio fisiología humana II"],
        "Laboratorio farmacología": ["Bioquímica II", "Laboratorio de bioquímica II", "Fisiología humana II", "Laboratorio fisiología humana II"],
        "Anatomía patológica II": ["Anatomía patológica I", "Laboratorio anatomía patológica I"],
        "Laboratorio anatomía patológica II": ["Anatomía patológica I", "Laboratorio anatomía patológica I"],
        "Sexología médica": ["Psicología médica", "Anatomía humana II", "Laboratorio de anatomía humana II"],
        "Evolución sociohistórica medica": ["Epidemiología", "Laboratorio epidemiología"],
        "Farmacoterapeutica": ["Farmacología", "Laboratorio farmacología"],
        "Laboratorio farmacoterapeutica": ["Farmacología", "Laboratorio farmacología"],
        "Endocrinología": ["Fisiopatología I", "Fisiopatología II", "Laboratorio fisiopatología II", "Bioquímica II", "Laboratorio de bioquímica II", "Fisiología humana I", "Laboratorio de fisiología humana I"],
        "Laboratorio endocrinología": ["Fisiopatología I", "Fisiopatología II", "Laboratorio fisiopatología II", "Bioquímica II", "Laboratorio de bioquímica II", "Fisiología humana I", "Laboratorio de fisiología humana I"],
        "Nefrología": ["Imagenología", "Infectología"],
        "Dermatología": ["Infectología"],
        "Oftalmología": ["Imagenología", "Cirugía general"],
        "Laboratorio oftalmología": ["Imagenología", "Cirugía general"],
        "Neurología": ["Imagenología"],
        "Laboratorio neurología": ["Imagenología"],
        "Cardiología": ["Imagenología", "Cirugía general"],
        "Laboratorio cardiología": ["Imagenología", "Cirugía general"],
        "Pneumopatología": ["Imagenología", "Cirugía general"],
        "Laboratorio pneumopatología": ["Imagenología", "Cirugía general"],
        "Gastroenterología": ["Imagenología"],
        "Laboratorio gastroenterología": ["Imagenología"],
        "Nutrición": ["Bioquímica II", "Laboratorio de bioquímica II", "Fisiología humana II", "Laboratorio fisiología humana II"],
        "Neurocirugía": ["Imagenología", "Cirugía general"],
        "Anestesiología": ["Pneumopatología", "Laboratorio pneumopatología"],
        "Otorrinolaringología": ["Imagenología", "Cirugía general"],
        "Laboratorio otorrinolaringología": ["Imagenología", "Cirugía general"],
        "Traumatología y ortopedia": ["Imagenología", "Cirugía general"],
        "Laboratorio traumatología y ortopedia": ["Imagenología", "Cirugía general"],
        "Urología": ["Nefrología", "Imagenología", "Cirugía general"],
        "Laboratorio urología": ["Nefrología", "Imagenología", "Cirugía general"],
        "Oncología": ["Imagenología", "Cirugía general"],
        "Pediatría y neonatología": ["Nutrición"],
        "Gineco-obstetricia": ["Anestesiología", "Oncología"],
        "Emergencias médicas": ["Anestesiología", "Imagenología", "Cirugía general"],
        "Metodología de la investigación en salud": ["Medicina forense", "Bioética y normativas en salud"],
        "Toxicología grl": ["Epidemiología", "Laboratorio epidemiología"],
        "Introducción terapia en pareja y familiar": ["Psiquiatría", "Laboratorio psiquiatría"],
        "Medicina de urgencias y desastres": ["Fisiología humana I", "Salud colectiva", "Anatomía humana II", "Laboratorio de anatomía humana II"],
        "Sustancias psicoactivas y adic": ["Semiología Médica", "Laboratorio semiología médica", "Fisiología humana II", "Laboratorio fisiología humana II"],
        "Medicina del deporte": ["Imagenología", "Traumatología y ortopedia", "Laboratorio traumatología y ortopedia"],
        "Medicina física y rehabilitación": ["Imagenología", "Traumatología y ortopedia", "Laboratorio traumatología y ortopedia"],
        "Salud ocupacional y ambiental": ["Salud colectiva", "Epidemiología", "Laboratorio epidemiología"]
    };


    // Mensajes motivacionales
    const motivationMessages = {
        "Semestre 10": [
            "KEEP GOING! 🌿✨",
            "LO ESTÁS LOGRANDO, ¡sigue así! 💖🏡",
            "Casi llegas a la meta, ¡eres increíble! 🌟🦋"
        ]
    };

    const curriculumGrid = document.getElementById('curriculum-grid');
    const motivationMessageDiv = document.getElementById('motivation-message');
    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || {};

    // Función para mostrar notificaciones temporales
    function showNotification(message) {
        let notification = document.querySelector('.notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.classList.add('notification');
            document.body.appendChild(notification);
        }
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000); // La notificación desaparece después de 3 segundos
    }

    // Función para verificar si un ramo está bloqueado
    function isCourseBlocked(courseName) {
        const requiredCourses = requirements[courseName];
        if (!requiredCourses) {
            return { blocked: false, missing: [] }; // No tiene requisitos
        }

        const missingRequirements = requiredCourses.filter(req => !approvedCourses[req]);
        return { blocked: missingRequirements.length > 0, missing: missingRequirements };
    }

    // Función para renderizar la malla curricular
    function renderCurriculum() {
        curriculumGrid.innerHTML = ''; // Limpiar la malla antes de renderizar
        let currentSemesterIndex = 0;

        for (const semesterName in semesters) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');
            semesterDiv.innerHTML = `<h2>${semesterName}</h2><ul class="course-list"></ul>`;
            const courseListUl = semesterDiv.querySelector('.course-list');

            semesters[semesterName].forEach(course => {
                const courseItemLi = document.createElement('li');
                courseItemLi.classList.add('course-item');
                courseItemLi.dataset.courseName = course;
                courseItemLi.textContent = course;

                // Marcar como aprobado si ya está en el almacenamiento local
                if (approvedCourses[course]) {
                    courseItemLi.classList.add('approved');
                }

                courseItemLi.addEventListener('click', () => {
                    const { blocked, missing } = isCourseBlocked(course);

                    if (approvedCourses[course]) {
                        // Si ya está aprobado, desaprobarlo
                        delete approvedCourses[course];
                        courseItemLi.classList.remove('approved');
                        showNotification(`"${course}" ha sido desaprobado.`);
                    } else if (blocked) {
                        // Si está bloqueado, mostrar mensaje
                        showNotification(`No puedes aprobar "${course}" aún. Debes aprobar: ${missing.join(', ')}.`);
                    } else {
                        // Si no está aprobado y no está bloqueado, aprobarlo
                        approvedCourses[course] = true;
                        courseItemLi.classList.add('approved');
                        showNotification(`¡"${course}" aprobado! 🎉`);
                    }
                    localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
                    updateCourseStates(); // Volver a renderizar para actualizar estados de bloqueo
                });
                courseListUl.appendChild(courseItemLi);
            });
            curriculumGrid.appendChild(semesterDiv);

            // Mostrar mensaje motivacional si es el semestre 10
            if (semesterName === "Semestre 10") {
                const randomIndex = Math.floor(Math.random() * motivationMessages[semesterName].length);
                motivationMessageDiv.textContent = motivationMessages[semesterName][randomIndex];
                motivationMessageDiv.style.display = 'block';
            } else {
                // Ocultar el mensaje si no estamos en el semestre 10
                motivationMessageDiv.style.display = 'none';
            }
        }
        updateCourseStates(); // Asegurarse de que los estados iniciales de bloqueo sean correctos
    }

    // Función para actualizar los estados de los ramos (bloqueado/desbloqueado)
    function updateCourseStates() {
        document.querySelectorAll('.course-item').forEach(courseItem => {
            const courseName = courseItem.dataset.courseName;
            const { blocked } = isCourseBlocked(courseName);

            // Si un ramo está aprobado, no debe mostrarse como bloqueado
            if (approvedCourses[courseName]) {
                courseItem.classList.remove('blocked');
                courseItem.classList.add('approved');
            } else if (blocked) {
                courseItem.classList.add('blocked');
            } else {
                courseItem.classList.remove('blocked');
            }
        });
    }

    // Renderizar la malla al cargar la página
    renderCurriculum();
});
