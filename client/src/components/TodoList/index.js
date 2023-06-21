import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";

const TodoList = () => {
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/tasks', { headers: { Authorization: `Bearer ${token}` } });
            setList(response.data);
        };
        fetchTasks();
    }, []);

    const addItem = () => {
        if (userInput !== "") {
            const userInputItem = {
                id: Math.random(),
                value: userInput,
            };

            const newList = [...list];
            newList.push(userInputItem);

            setList(newList);
            setUserInput("");
        }
    };

    const updateInput = (value) => {
        setUserInput(value);
    };

    const deleteItem = (key) => {
        const newList = list.filter((item) => item.id !== key);
        setList(newList);
    };

    const editItem = (index) => {
        const todos = [...list];
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            todos[index].value = editedTodo
            setList(todos);
        }
    };

    return (
        <>
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                >
                    TODO LIST
                </Row>

                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="add item . . . "
                                size="lg"
                                value={userInput}
                                onChange={(item) =>
                                    updateInput(item.target.value)
                                }
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup>
                                <Button
                                    style={{ backgroundColor: '#db4c3f', color: 'white', borderColor: '#db4c3f' }}
                                    className="mt-2"
                                    onClick={() => addItem()}
                                >
                                    ADD
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {list.map((item, index) => {
                                return (
                                    <div key={index} >
                                        <ListGroup.Item
                                            variant="dark"
                                            action
                                            style={{
                                                display: "flex",
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            {item.value}
                                            <span>
                                                <Button style={{ marginRight: "10px" }}
                                                    variant="light"
                                                    onClick={() => deleteItem(item.id)}>
                                                    Delete
                                                </Button>
                                                <Button variant="light"
                                                    onClick={() => editItem(index)}>
                                                    Edit
                                                </Button>
                                            </span>
                                        </ListGroup.Item>
                                    </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TodoList;