function hello<T>(param1: T): T {
    return param1;
}

hello('data')
hello<Student>({ id: 10, name: 'bhargav' });

interface Student {
    id: number;
    name: string
}

class Student1<T, M> {

    id: T;
    name: M

    constructor(id: T, name: M) {

    }

}

new Student1(10, 11);