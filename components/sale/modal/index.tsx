'use client';

import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

const Modal = () => {
  return (
    <Card
      placeholder="go"
      className="absolute bottom-0 w-full flex flex-col items-center"
    >
      <h2>판매할 숙박권을 선택해주세요</h2>
      <List placeholder="go">
        <ListItem placeholder="go" className="p-0">
          <label
            htmlFor="vertical-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix placeholder="go" className="mr-3">
              <Checkbox
                id="vertical-list-react"
                ripple={false}
                className="hover:before:opacity-0 rounded-full"
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography
              placeholder="go"
              color="blue-gray"
              className="font-medium"
            >
              제주 신라 호텔
              {/* <div>제주 신라 호텔</div>
              <p>12/25~12/26(1박)</p> */}
            </Typography>
          </label>
        </ListItem>
        <ListItem placeholder="go" className="p-0">
          <label
            htmlFor="vertical-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix placeholder="go" className="mr-3">
              <Checkbox
                id="vertical-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography
              placeholder="go"
              color="blue-gray"
              className="font-medium"
            >
              제주 신라 호텔
              {/* <div>제주 신라 호텔</div>
              <p>12/25~12/26(1박)</p> */}
            </Typography>
          </label>
        </ListItem>
        <ListItem placeholder="go" className="p-0">
          <label
            htmlFor="vertical-list-svelte"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix placeholder="go" className="mr-3">
              <Checkbox
                id="vertical-list-svelte"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: 'p-0',
                }}
              />
            </ListItemPrefix>
            <Typography
              placeholder="go"
              color="blue-gray"
              className="font-medium"
            >
              제주 신라 호텔
              {/* <div>제주 신라 호텔</div>
              <p>12/25~12/26(1박)</p> */}
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
};

export default Modal;
