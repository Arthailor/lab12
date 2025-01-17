import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateEmployeeModal from "../components/Admin/CreateEmployeeModal"

test('checks the behavior of the "Add" button', () => {
    const mockOnHide = jest.fn();
    render(<CreateEmployeeModal show={true} onHide={mockOnHide} />);

    const nameInput = screen.getByPlaceholderText("Name");
    const surnameInput = screen.getByPlaceholderText("Surname");
    const positionInput = screen.getByPlaceholderText("Position");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const addButton = screen.getByText("Add");

    expect(addButton).toBeDisabled();

    fireEvent.change(nameInput, { target: { value: "Test" } });
    fireEvent.change(surnameInput, { target: { value: "Test" } });
    fireEvent.change(positionInput, { target: { value: "Test" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(addButton).not.toBeDisabled();

    fireEvent.click(addButton);
});
