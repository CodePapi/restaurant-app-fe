import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  getBookingsCleanup,
  getBookings,
} from "../../store/actions/get-bookings";
import { useEffect } from "react";

const Bookings = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [bookingss, setBookigs] = useState([]);
  const getBookingState = useSelector((b) => b.getBookings);
  const showDrawer = () => {
    setVisible(true);
  };

  useEffect(() => {
    dispatch(getBookings());
  }, []);

  useEffect(() => {
    if (getBookingState.isSuccessful) {
      const resData = getBookingState.data.map((a) => a.restaurantData);
      setBookigs(resData);
      dispatch(getBookingsCleanup());
    } else if (getBookingState.error) {
      dispatch(getBookingsCleanup());
    }
  }, [getBookingState]);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showDrawer}>
        My Bookings
      </Button>
      <Drawer
        title="All My Bookings"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        {bookingss?.map((a, i) => (
          <div key={i}>
           {i+1} <p>Restaurants: {a.Name}</p>
            <p>Location: {a.location}</p>
            <p>Cuisine: {a.cuisine}</p>
            <hr />
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default Bookings;
