import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CatalogueWrapper from "../../components/wrappers/catalogue/CatalogueWrapper";
import Loader from "../../components/ui/loader/Loader";
import Error from "../../components/ui/error/Error";
import CatalogueItem from "../../components/items/catalogue/CatalogueItem";
import CatalogueControl from "../../components/ui/controls/catalogue/CatalogueControl";
import ControlButton from "../../components/ui/buttons/controls/ControlButton";
import ModalWrapper from "../../components/wrappers/modal/ModalWrapper";
import Confirm from "../../components/ui/modals/confirm/Confirm";
import PageTitle from "../../components/ui/title/PageTitle";

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [selectedID, setSelectedID] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const getWorkshops = async () => {
    axios
      .get("/api/v1/electricity/workshops")
      .then((r) => {
        if (r.data.success) {
          setWorkshops(r.data.items);
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason))
      .then(() => setLoading(false));
  };

  const deleteWorkshop = async () => {
    axios
      .delete(`/api/v1/electricity/workshops/${selectedID}`)
      .then((r) => {
        if (r.data.success) {
          setWorkshops(workshops.filter((workshop) => workshop.id !== selectedID));
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason))
      .then(() => setModalVisible(false));
  };

  useEffect(() => {
    getWorkshops();
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (error) {
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
        {workshops.map((workshop) => (
          <CatalogueItem key={workshop.id} title={workshop.title}>
            <CatalogueControl>
              <ControlButton
                type="link"
                label="Изменить"
                linkURL="edit"
                linkState={{ item: workshop }}
              />
              <ControlButton
                label={"Удалить"}
                type="button"
                callback={() => {
                  setSelectedID(workshop.id);
                  setModalVisible(true);
                }}
              />
            </CatalogueControl>
          </CatalogueItem>
        ))}
      </CatalogueWrapper>
      <ModalWrapper isVisible={modalVisible} setIsVisible={setModalVisible}>
        <Confirm
          onConfirmAction={deleteWorkshop}
          onCloseAction={setModalVisible}
        />
      </ModalWrapper>
    </React.Fragment>
  );
};

export default Workshops;
