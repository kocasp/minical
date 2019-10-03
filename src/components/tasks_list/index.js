import React from "react";
import Task from "./task";


class TasksList extends React.Component {

  state = {
    tasks: [
      {
        id: 1,
        content: 'Obiad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sed libero auctor porta. Fusce nec lectus est. Suspendisse porttitor nisl in libero vehicula, in vulputate nulla congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce gravida odio vel pellentesque pretium. Mauris mauris massa, sollicitudin non ornare a, ultricies sed sem. Ut lacus odio, faucibus ut dolor vel, posuere sollicitudin nunc. Praesent blandit auctor dolor, nec fermentum velit tempor at. Maecenas in auctor ante. In sed pulvinar lectus. Morbi at accumsan quam, eget fermentum tortor. Vivamus luctus tellus quis maximus dapibus. Nam vel magna at enim ullamcorper scelerisque et id tellus.'
      },
      {
        id: 2,
        content: 'Wazna informacja na czerwono',
        color: 'red'
      },
      {
        id: 3,
        content: 'Pojsc na silownie'
      },
      {
        id: 4,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius sed libero auctor porta. Fusce nec lectus est. Suspendisse porttitor nisl in libero vehicula, in vulputate nulla congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce gravida odio vel pellentesque pretium. Mauris mauris massa, sollicitudin non ornare a, ultricies sed sem. Ut lacus odio, faucibus ut dolor vel, posuere sollicitudin nunc. Praesent blandit auctor dolor, nec fermentum velit tempor at. Maecenas in auctor ante. In sed pulvinar lectus. Morbi at accumsan quam, eget fermentum tortor. Vivamus luctus tellus quis maximus dapibus. Nam vel magna at enim ullamcorper scelerisque et id tellus.',
        color: 'blue'
      }
    ],
    labels: ['birthday', 'university', 'doctor', 'important']
  }

  // constructor (props) {
  //   super();
  //   const { content, color } = props;
  //   this.state = {content, color};
  // }

  render() {
    return (
      this.state.tasks.map((task) => {
        return <div><Task id={task.id} content={task.content} color={task.color} />{this.props.labels}</div>
      })
    );
  }

}

export default TasksList;
