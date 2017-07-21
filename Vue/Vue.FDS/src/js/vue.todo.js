{
    let config = {
        apiKey: "",
        authDomain: "vue-todolist-c856b.firebaseapp.com ",
        databaseURL: "https://vue-todolist-c856b.firebaseio.com",
        storageBucket: "bucket.appspot.com"
    };
    firebase.initializeApp(config);

    // Vue instance
    new Vue({

        el: '.app',
        created() {
            this.getList();
        },

        data: {
            todoList: {
                task: [],
                complete: []
            },
            editable: false
        },

        computed: {

        },

        methods: {
            getList() {
                // Truncate before fetch todolist
                this.todoList.task = [];
                this.todoList.complete = [];

                // Fetching todo items from server
                firebase.database().ref('todolist/').once('value').then((res) => {
                    res.forEach((todo) => {


                        if (todo.val().status) {
                            this.todoList.task.push(Object.assign(todo.val(), {
                                key: todo.key
                            }));
                        } else {
                            this.todoList.complete.push(Object.assign(todo.val(), {
                                key: todo.key
                            }));
                        }
                    })
                })
            },
            add() {
                let input = document.querySelector('.userInput');

                if (input.value === '') throw 'You must type something.';

                // .set will overwrite. Be aware!
                let addedKey = firebase.database().ref('todolist/').push({
                    content: input.value,
                    status: true
                }).key;

                this.todoList.task.push({
                    content: input.value,
                    status: true,
                    key: addedKey
                });

                input.value = '';

            },
            remove(key) {

                firebase.database().ref('todolist/' + key).remove();

                this.todoList.task.forEach((item, index) => {
                    if (item.key === key) {
                        let toRemove = this.todoList.task.indexOf(item);
                        this.todoList.task.splice(toRemove, 1);
                    }
                });
                this.todoList.complete.forEach((item, index) => {
                    if (item.key === key) {
                        let toRemove = this.todoList.complete.indexOf(item);
                        this.todoList.complete.splice(toRemove, 1);
                    }
                });
            },
            complete(key) {
                firebase.database().ref().child('todolist/' + key).update({
                    status: false
                })
                this.todoList.task.forEach((item, index) => {
                    if (item.key === key) {

                        let toMove = this.todoList.task.indexOf(item);
                        toMove = this.todoList.task.splice(toMove, 1);
                        this.todoList.complete.push(toMove[0]);
                        this.$set(item, 'status', false);
                    }
                })

            },
            undo(key) {
                firebase.database().ref().child('todolist/' + key).update({
                    status: true
                })
                this.todoList.complete.forEach((item, index) => {
                    if (item.key === key) {
                        let toMove = this.todoList.complete.indexOf(item);
                        toMove = this.todoList.complete.splice(toMove, 1);
                        this.todoList.task.push(toMove[0]);
                        this.$set(item, 'status', true);
                    }
                })
            },
            edit($event) {
                let node = $event.target.nextElementSibling.nextElementSibling;
                node.setAttribute('class', 'active');
                node.focus();
            },
            editConfirm(key, $event) {
                let input = $event.target;
                if (input.value === '') throw 'You must type something.';

                firebase.database().ref().child('todolist/' + key).update({
                    content: input.value
                })

                this.todoList.task.forEach((item, index) => {
                    if (item.key === key) {
                        this.$set(item, 'content', input.value);
                    }
                })


                input.setAttribute('class', 'editInput');

            },
            editCancel($event) {
                let input = $event.target;
                input.setAttribute('class', 'editInput');
            }
        }
    });
}