import React, { useState } from "react";
import { Modal, Button } from "antd";
import { book, bookCleanup } from "../../store/actions/book-restaurant/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { message } from "antd";

const BookingModal = ({ children, data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const profileState = useSelector((p) => p.getProfile);
  const bookState = useSelector((b) => b.book);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const bookedBy = {
    name: profileState.data?.username,
    email: profileState.data?.email,
  };
  const restaurantData = {
    Name: data.Name,
    location: data.location,
    cuisine: data.cuisine,
    id: data.id,
  };
  const BookFun = () => {
    dispatch(book({ bookedBy: bookedBy, restaurantData: restaurantData }));
  };

  useEffect(() => {
    if (bookState.isSuccessful) {
      setIsModalVisible(false);
      message.success("restaurant booked successfully");
      dispatch(bookCleanup());
    } else if (bookState.error) {
      dispatch(bookCleanup());
      message.error("problems booking restaurant, try again");
    }
  }, [bookState]);
  return (
    <>
      <div onClick={showModal}>{children}</div>
      <Modal
        title="Do you wish to book this restaurant? "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <Button
            loading={bookState.isLoading}
            disabled={bookState.isLoading}
            onClick={BookFun}
          >
            Book
          </Button>
        }
      >
        <p>Restaurants Name: {data.Name}.</p>
        <p>Location: {data.location}</p>
        <p>Cuisine: {data.cuisine}</p>
      </Modal>
    </>
  );
};

export default BookingModal;
