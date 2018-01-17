var employee = {
    id:1,
    greet: function() {
        console.log(this.id);
    }
}
employee.greet();