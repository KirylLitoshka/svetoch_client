import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "../../ui/error/Error";
import FormWrapper from "../../wrappers/form/FormWrapper";

const AreasForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [area, setArea] = useState({ title: "" });
  const [error, setError] = useState("");

  const postArea = async () => {
    axios
      .post("/api/v1/electricity/areas", area)
      .then((r) => {
        if (r.data.status === "success") {
          navigate("/catalogues/areas");
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason));
  };

  const patchArea = async () => {
    axios
      .patch(`/api/v1/electricity/areas/${area.id}`, area)
      .then((r) => {
        if (r.data.status === "success") {
          navigate("/catalogues/areas");
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason));
  };

  useEffect(() => {
    if (location.state?.item) {
      setArea(location.state.item);
    }
  }, []);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <FormWrapper>
      <div className="form__row">
        <label htmlFor="title" className="form__label">
          Наименование
        </label>
        <input
          id="title"
          type="text"
          className="form__input"
          value={area.title}
          onChange={(e) => setArea({ ...area, title: e.target.value })}
        />
      </div>
      <div className="form__row">
        {area.id ? (
          <button className="form__button" onClick={patchArea}>
            Обновить
          </button>
        ) : (
          <button className="form__button" onClick={postArea}>
            Создать
          </button>
        )}
      </div>
    </FormWrapper>
  );
};

export default AreasForm;
