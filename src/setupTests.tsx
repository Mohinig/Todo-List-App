import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';
import Todo from "./components/Todo";

configure({ adapter: new Adapter() });

