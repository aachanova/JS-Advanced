class HomeRenovation {
    constructor (budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (this.budget < cost) {
            return `Not enough budget to add '${description}' task.`;
        } else {
            this.tasks.push({description, cost, priority});
            this.budget -= cost;

            return `The task '${description}' has been successfully added to the renovation plan.`;
        }
    }

    markTaskAsCompleted(description) {
        let foundTask = this.tasks.find(task => task.description === description);

        if (!foundTask) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        let taskIndex = this.tasks.findIndex(task => task.description === description);
        this.tasks.splice(taskIndex, 1);
        this.completedTasks.push(foundTask);

        return `The task '${description}' has been successfully completed.`
    }

    getPriorityTasksCount (minimalPriority) {
        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        } else {
            let priorityTasks = this.tasks.filter(task => (task.priority >= minimalPriority));

            if (priorityTasks.length == 0) {
                return `No tasks found with priority ${minimalPriority} or higher.`;
            } else {
                return `You have ${priorityTasks.length} tasks to prioritize.`
            }
        }
    }

    renovationSummary() {
        if (this.completedTasks.length == 0) {
            throw new Error('No tasks have been completed yet!');            
        }

        let result = [`Budget left $${this.budget}.`]
        result.push(`You have completed ${this.completedTasks.length} tasks.`);
        result.push('Pending tasks in the renovation plan:');
        this.tasks.forEach(task => result.push(`${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`));

        return result.join('\n');
    }
}
// Input 1
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.addTask("New Roof", 5000, 1)); 



// Output 1
// The task 'Paint walls' has been successfully added to the renovation plan.
// The task 'Install new windows' has been successfully added to the renovation plan.
// Not enough budget to add 'New Roof' task.


// Input 2
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.markTaskAsCompleted("Change doors")); 


// Output 2
// The task 'Paint walls' has been successfully added to the renovation plan.
// The task 'Install new windows' has been successfully added to the renovation plan.
// The task 'Paint walls' has been successfully completed.
// Error: Task 'Change doors' not found in the renovation plan.


// Input 3
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.getPriorityTasksCount(1)); 


// Output 3
// The task 'Paint walls' has been successfully added to the renovation plan.
// The task 'Install new windows' has been successfully added to the renovation plan.
// The task 'Paint walls' has been successfully completed. 
// You have 1 tasks to prioritize.


// Input 4
// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.renovationSummary());


// Output 4
// The task 'Paint walls' has been successfully added to the renovation plan. 
// The task 'Install new windows' has been successfully added to the renovation plan. 
// The task 'Paint walls' has been successfully completed.
// Budget left $3500.
// You have completed 1 tasks.
// Pending tasks in the renovation plan:
// Install new windows - Cost: 5000, Priority: 1
