import { Box, VStack, HStack, Button, Text, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { format } from 'date-fns';
import { useTasks } from '../provider/TasksContext';

const TodayChallenges = () => {
    const today = new Date();
    const { tasks, addTask, deleteTask, updateTaskStatus } = useTasks();
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        addTask(format(today, 'yyyy-MM-dd'), { text: newTask, status: 'in-progress' });
        setNewTask('');
    };

    const todayTasks = tasks[format(today, 'yyyy-MM-dd')] || [];

    return (
        <Box>
            <Box w={'100%'} textAlign={'center'} bg={'purple.400'} color={'white'} p={2} mb={4}>
                {format(today, 'dd MMMM yyyy')} 
            </Box>

            <VStack align="stretch" spacing={4}>
                <Input
                    placeholder="Yangi task qo'shing"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button colorScheme="teal" onClick={handleAddTask}>Task qo'shish</Button>

                {todayTasks.map((task, index) => (
                    <HStack key={index} justify="space-between" borderWidth="1px" borderRadius="md" p={2}>
                        <Text textDecoration={task.status === 'done' ? 'line-through' : 'none'}>
                            {task.text}
                        </Text>
                        <HStack>
                            <Button size="sm" onClick={() => updateTaskStatus(format(today, 'yyyy-MM-dd'), index, task.status === 'done' ? 'in-progress' : 'done')}>
                                {task.status === 'done' ? 'Re-activate' : 'Complete'}
                            </Button>
                            <Button size="sm" colorScheme="red" onClick={() => deleteTask(format(today, 'yyyy-MM-dd'), index)}>
                                O'chirish
                            </Button>
                        </HStack>
                    </HStack>
                ))}
            </VStack>
        </Box>
    );
};

export default TodayChallenges;
