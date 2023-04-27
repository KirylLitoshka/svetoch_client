import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "../../ui/error/Error";
import FormWrapper from "../../wrappers/form/FormWrapper";

const WorkshopsForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [workshop, setWorkshop] = useState({ title: "" });
  const [error, setError] = useState("");

  const createWorkshop = async () => {
    await axios
      .post("/api/v1/electricity/workshops", workshop)
      .then((r) => {
        if (r.data.status === "success") {
          navigate("/catalogues/workshops");
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason));
  };

  const updateWorkshop = async () => {
    await axios
      .patch(`/api/v1/electricity/workshops/${workshop.id}`, workshop)
      .then((r) => {
        if (r.data.status === "success") {
          navigate("/catalogues/workshops");
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason));
  };

  useEffect(() => {
    if (location.state?.item) {
      setWorkshop(location.state.item);
    }
  }, []);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <FormWrapper>
      <div className="form__row">
        <label htmlFor="name" className="form__label">
          Наименование
        </label>
        <input
          type="text"
          className="form__input"
          name="name"
          value={workshop.title}
          onChange={(e) => setWorkshop({ ...workshop, title: e.target.value })}
        />
      </div>
      <div className="form__row">
        {workshop.id ? (
          <button className="form__button" onClick={updateWorkshop}>
            Обновить
          </button>
        ) : (
          <button className="form__button" onClick={createWorkshop}>
            Создать
          </button>
        )}
      </div>
    </FormWrapper>
  );
};

export default WorkshopsForm;
