import React, { useEffect, useState } from "react";
import FormWrapper from "../../wrappers/form/FormWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Error from "../../ui/error/Error";

const MetersForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [meter, setMeter] = useState({ title: "", capacity: 0 });
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.state?.item) {
      setMeter(location.state.item);
    }
  }, []);

  const postMeter = async () => {
    axios
      .post("/api/v1/electricity/meters", meter)
      .then((r) => {
        if (r.data.status === "success") {
          navigate("/catalogues/meters");
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason));
  };

  const patchMeter = async () => {
    axios
      .patch(`/api/v1/electricity/meters/${meter.id}`, meter)
      .then((r) => {
        if (r.data.status === "success") {
          navigate("/catalogues/meters");
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason));
  };

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
          name="name"
          type="text"
          className="form__input"
          value={meter.title}
          onChange={(e) => setMeter({ ...meter, title: e.target.value })}
        />
      </div>
      <div className="form__row">
        <label htmlFor="name" className="form__label">
          Разрядность
        </label>
        <input
          name="name"
          type="number"
          step={1}
          min={0}
          className="form__input"
          value={meter?.capacity}
          onChange={(e) =>
            setMeter({ ...meter, capacity: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="form__row">
        {meter.id ? (
          <button className="form__button" onClick={patchMeter}>
            Обновить
          </button>
        ) : (
          <button className="form__button" onClick={postMeter}>
            Создать
          </button>
        )}
      </div>
    </FormWrapper>
  );
};

export default MetersForm;
