import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EmployeeList from '../components/Admin/EmployeeList';
import { deleteEmployee } from '../http/employeeAPI';

const mockStore = {
    employees: {
        employee: { employee_id: "ADMIN" },
    }
};

const reducer = (state = mockStore) => state;
const store = createStore(reducer);

jest.mock('../http/employeeAPI', () => ({
    deleteEmployee: jest.fn()
}));


test('checks the "Delete" button functionality', () => {
    const employees = [
        { employee_id: '1', name: 'John', surname: 'Doe', position: 'Developer', email: 'john.doe@example.com' },
        { employee_id: '2', name: 'Jane', surname: 'Smith', position: 'Designer', email: 'jane.smith@example.com' }
    ];

    render(
        <Provider store={store}>
            <EmployeeList employees={employees} />
        </Provider>
    );

    const deleteButtons = screen.getAllByText("Delete");

    expect(deleteButtons).toHaveLength(2);

    fireEvent.click(deleteButtons[0]);

    expect(deleteEmployee).toHaveBeenCalledWith('1');
});

