import { createElement } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Section from '../../Checkout/section'
import Selector from '../selector';

configure({ adapter: new Adapter() });

const classes = { root: 'foo' };
const options = [
    {
        code: 'food',
        title: 'bar'
    },
    {
        code: 'bar',
        title: 'foo'
    }
];

test('renders if `options` is an empty array', () => {
    const wrapper = shallow(<Selector classes={classes} options={[]} />).dive();

    expect(wrapper.hasClass(classes.root)).toBe(true);
});

test('renders if `options` is an array of objects', () => {
    const wrapper = shallow(<Selector classes={classes} options={options} />).dive();

    expect(wrapper.hasClass(classes.root)).toBe(true);
});

test('renders correct amount of children from `options` as `Sections`', () => {
    const wrapper = mount(<Selector options={options} />);
    const children = wrapper.find('Section');

    expect(children).toHaveLength(options.length);
});

test('calls `handleSelection` on `Section` click', () => {
    let handleSelection = jest.fn();

    const wrapper = mount(<Selector options={options} handleSelection={handleSelection} />);
    const children = wrapper.find('Section').first().simulate('click');

    expect(handleSelection).toHaveBeenCalledTimes(1);
});