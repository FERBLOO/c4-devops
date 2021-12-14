import React, {useState } from "react";
import { projectMutations, projectQueries, gql } from '@apollo/client';
import { Formik } from "formik";
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const NEWPROJECT = gql`
  mutation addProject($input: AddProjectInput!) {
    addProject(input: $input) {
      _id
    }
  }
`;

const ROLES = gql `
  query Query {
    roles {
      code
      value
    }
  }
`;

const initialValues = {
    name: " ",
    generalObjective: " ",
    specificObjectives: [" ", " "],
    budget: " ",
    leader_id: " ",
    startDate: " ",
    endDate: " ",
    status: " "
};

const validationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  generalObjective: Yup.string().required('Campo requerido'),
  specificObjectives: Yup.string().required('Campo requerido'),
  budget: Yup.number('Ingresa solo números').required('Campo requerido'),
  leader_id: Yup.string().required('Campo requerido'),
  startDate: Yup.string().required('Ingrese la fecha en formato AAAA-MM-DD'),
  endDate: Yup.string().required('Ingrese la fecha en formato AAAA-MM-DD'),
  status: Yup.string().required('Campo requerido'),
  
})

const NewProject = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [addProject] = projectMutation(NEWPROJECT);
  const { data, loading: loadingRoles } = useQuery(ROLES);

  return (
    <Row className="mt-3 justify-content-center">
      <Col lg="5">
        <Alert dismissible variant="danger" onClose={() => setError(false)} show={error}>
          Error regitrando el usuario
        </Alert>
        <Alert dismissible variant="success" onClose={() => setSuccess(false)} show={success}>
          Usuario creado con éxito. Haz click <Link className="alert-link" to="/">aquí</Link> para iniciar session
        </Alert>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            addProject({
              variables: {
                input: {
                  ...values,
                }
              }
            })
            .then(() => {
              setError(false);
              setSuccess(true);
            })
            .catch(() => setError(true));
          }}
        >
          {({
            handleSubmit,
            getFieldProps,
            errors,
            touched
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre poyecto</Form.Label>
                <Form.Control 
                  name="Nombre del proyecto" 
                  type="nombre" 
                  placeholder="Ingresa el nombre del proyecto" 
                  {...getFieldProps('nombre')}
                />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPresupuesto">
                <Form.Label>Presupuesto</Form.Label>
                <Form.Control 
                  name="Budget"
                  type="number"
                  placeholder="Ingresa el presupuesto"
                  isInvalid={touched.documentId && !!errors.documentId}
                  {...getFieldProps('budget')}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.documentId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  name="startDate"
                  placeholder="AAAA-MM-DD"
                  isInvalid={touched.name && !!errors.name}
                  {...getFieldProps('startDate')}
                />
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  name="lastName"
                  placeholder="Ingresa tu apellido" 
                  isInvalid={touched.lastName && !!errors.lastName}
                  {...getFieldProps('lastName')}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Label htmlFor="status" className="form-label">Rol</Form.Label>
              <Form.Group className="mb-3" controlId="formRole">
                <Form.Select 
                  name="role"
                  isInvalid={touched.role && !!errors.role}
                  {...getFieldProps('status')}
                >
                  <option value="">Selecciona el estado</option>
                  {!loadingRoles && data.roles.map(({ code, value}, index) => <option key={index} value={code}>{value}</option>)}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formtPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                  name="password"
                  type="password"
                  placeholder="Contraseña" 
                  isInvalid={touched.password && !!errors.password}
                  {...getFieldProps('password')}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Enviar</Button>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default NewProject;