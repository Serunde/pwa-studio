import { createElement } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Section from '../section.js';

configure({ adapter: new Adapter() });

const classes = {
  label: "a",
  root: "b",
  summary: "c",
  icon: "d"
}

const label = "Test Label";
const selectedOption = true;

test('should pass', () => {
    const wrapper = shallow(
      <Section
        classes={classes}
        label={label}
        onClick={() => {}}
        selectedOption={selectedOption}
      />
    ).dive();

    const icon = wrapper.find({className: classes.icon});
    expect(icon).toHaveLength(1);
});
