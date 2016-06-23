import _ from 'lodash';

export default function($scope, todoFactory) {
    let params = {
        createHasInput: false
    };

    // $scope.todos = [
    // {
    //     task: 'do dishes',
    //     isCompleted: false,
    //     isEditing: false
    // },
    // {
    //     task: 'walk the dog',
    //     isCompleted: true,
    //     isEditing: false
    // }
    // ];

    todoFactory.getTasks($scope);

    $scope.onEditClick = todo => {
        todo.isEditing = true;
        todo.updatedTask = todo.task;
    };

    $scope.onCancelClick = todo => {
        todo.isEditing = false;
    };

    const { createTask, updateTask, deleteTask, watchCreateTaskInput, onCompletedClick } = todoFactory;
    
    $scope.onCompletedClick = _.partial(onCompletedClick, $scope);
    $scope.createTask = _.partial(createTask, $scope, params);
    $scope.updateTask = _.partial(updateTask, $scope);
    $scope.deleteTask = _.partial(deleteTask, $scope);
    $scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));
}
