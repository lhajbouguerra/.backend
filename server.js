const express = require('express');
const app = express();
const { PrismaClient } = require('./prisma/generated/prisma');
const prisma = new PrismaClient();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post("/addtask", async (request, response) => {
    const task = request.body;
    console.log(`task: ${task.title}`)
    const newtask = await prisma.Task.create({
        data: {
            title: task.title
        }
    })
    response.json(newtask)
});
app.delete("/deletetask:id", async (request, response) => {
    const taskID = request.params.id
    await prisma.Task.delete({
        where: {
            id: taskID
        }
    })
    console.log(`task ${taskID} deleted successfully!`)
    response.json({
        message: "task deleted ",
        Comment: "successfully",
        test: "test"
    })
})
app.put("/updatetask:id", async (request, response) => {
    const taskID = request.params.id
    const task = await prisma.Task.findUnique({ where: { id: taskID } });
    await prisma.task.update({
        where: {
            id: taskID
        },
        data: {
            done: !task.done
        }
    })
    console.log(`task ${task.done} updated successfully!`)
})
app.get("/tasks", async (request, response) => {
    const tasks = await prisma.Task.findMany();

    response.json(tasks)
})
const PORT = 5500;
app.listen(PORT, () => {
    console.log("server is running on port", PORT);
});
