import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux'
import {mockStore} from './mocks/storeMock';
import '@testing-library/jest-dom';
import ProductList from '../components/ProducList/ProductList';

const mockItems = [
    {
        name: "first item",
        img: 'img',
        number: 1234,
        mId: [1,2,3,4],
        year: '2014',
        launch: true,
        landing: true
    },
    {
        name: "second item",
        img: 'img',
        number: 1234,
        mId: [1,2,3,4],
        year: '2014',
        launch: true,
        landing: true
    },
    {
        name: "third item",
        img: 'img',
        number: 1234,
        mId: [1,2,3,4],
        year: '2014',
        launch: true,
        landing: true
    }
  ];
const isLoading = true;

describe("Product list component", () => {
    it("Filters are loading data", () => {
        const { getByText } = render(
            <Provider store={mockStore}><ProductList products={mockItems} isLoading={isLoading}/></Provider>
        );
        expect(getByText("Please wait..., updated results will appear shortly.")).toBeVisible();
    });
});