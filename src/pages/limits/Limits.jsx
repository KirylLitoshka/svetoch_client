import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CatalogueWrapper from "../../components/wrappers/catalogue/CatalogueWrapper";
import PageTitle from "../../components/ui/title/PageTitle";
import CatalogueItem from "../../components/items/catalogue/CatalogueItem";
import CatalogueControl from "../../components/ui/controls/catalogue/CatalogueControl";
import ControlButton from "../../components/ui/buttons/controls/ControlButton";
import Confirm from "../../components/ui/modals/confirm/Confirm";
import ModalWrapper from "../../components/wrappers/modal/ModalWrapper";
import Loader from "../../components/ui/loader/Loader";
import Error from "../../components/ui/error/Error";

const Limits = () => {
  const [limits, setLimits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const deleteLimitItem = async () => {
    axios
      .delete(`/api/v1/electricity/limits/${selectedItem.id}`)
      .then((r) => {
        if (r.data.success) {
          setLimits(limits.filter((limit) => limit.id !== selectedItem.id));
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason))
      .then(() => setModalVisible(false));
  };

  useEffect(() => {
    const getLimits = async () => {
      axios
        .get("/api/v1/electricity/limits")
        .then((r) => {
          if (r.data.success) {
            setLimits(r.data.items);
          } else {
            setError(r.data.reason);
          }
        })
        .catch((e) => setError(e.response.data.reason))
        .then(() => setLoading(false));
    };

    getLimits();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error} />;
  }

  return (
    <React.Fragment>
      <PageTitle>
        <Link to="add" className="page-main__button">
          + Добавить
        </Link>
      </PageTitle>
      <CatalogueWrapper>
        {limits.map((limit) => (
          <CatalogueItem key={limit.id} title={limit.title}>
            <CatalogueControl>
              <ControlButton
                label={"Изменить"}
                type={"link"}
                linkURL={"edit"}
                linkState={{ item: limit }}
              />
              <ControlButton
                type={"button"}
                label={"Удалить"}
                callback={() => {
                  setModalVisible(true);
                  setSelectedItem(limit);
                }}
              />
            </CatalogueControl>
          </CatalogueItem>
        ))}
      </CatalogueWrapper>
      <ModalWrapper isVisible={modalVisible} setIsVisible={setModalVisible}>
        <Confirm
          onCloseAction={setModalVisible}
          onConfirmAction={deleteLimitItem}
        />
      </ModalWrapper>
    </React.Fragment>
  );
};

export default Limits;
