import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/ui/loader/Loader";
import Error from "../../components/ui/error/Error";
import CatalogueWrapper from "../../components/wrappers/catalogue/CatalogueWrapper";
import PageTitle from "../../components/ui/title/PageTitle";
import { Link } from "react-router-dom";
import CatalogueItem from "../../components/items/catalogue/CatalogueItem";
import CatalogueControl from "../../components/ui/controls/catalogue/CatalogueControl";
import ControlButton from "../../components/ui/buttons/controls/ControlButton";
import ModalWrapper from "../../components/wrappers/modal/ModalWrapper";
import Confirm from "../../components/ui/modals/confirm/Confirm";

const SubObjects = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [subObjects, setSubObjects] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const deleteSubObject = async () => {
    await axios
      .delete(`/api/v1/electricity/subobjects/${selectedItem.id}`)
      .then((r) => {
        if (r.data.success) {
          setSubObjects(
            subObjects.filter((item) => item.id !== selectedItem.id)
          );
        } else {
          setError(r.data.reason);
        }
      })
      .catch((e) => setError(e.response.data.reason))
      .then(() => setModalVisible(false));
  };

  useEffect(() => {
    const getSubObjects = async () => {
      axios
        .get("/api/v1/electricity/subobjects")
        .then((r) => {
          if (r.data.success) {
            setSubObjects(r.data.items);
          } else {
            setError(r.data.reason);
          }
        })
        .catch((e) => setError(e.response.data.reason))
        .then(() => setLoading(false));
    };

    getSubObjects();
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
        {subObjects.map((subObject) => (
          <CatalogueItem key={subObject.id} title={subObject.title}>
            <CatalogueControl>
              <ControlButton
                label={"Изменить"}
                type={"link"}
                linkURL={"edit"}
                linkState={{ item: subObject }}
              />
              <ControlButton
                type={"button"}
                label={"Удалить"}
                callback={() => {
                  setModalVisible(true);
                  setSelectedItem(subObject);
                }}
              />
            </CatalogueControl>
          </CatalogueItem>
        ))}
      </CatalogueWrapper>
      <ModalWrapper isVisible={modalVisible} setIsVisible={setModalVisible}>
        <Confirm
          onCloseAction={setModalVisible}
          onConfirmAction={deleteSubObject}
        />
      </ModalWrapper>
    </React.Fragment>
  );
};

export default SubObjects;
