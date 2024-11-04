import { Box, VStack, HStack, Button, Text, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { useTasks } from '../provider/TasksContext';
import './WeeklyTasks.css';

const WeeklyTasks = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today);
    const { tasks, addTask, deleteTask, updateTaskStatus } = useTasks();
    const [newTask, setNewTask] = useState('');

    const startOfThisWeek = startOfWeek(today, { weekStartsOn: 1 });
    const endOfThisWeek = addDays(startOfThisWeek, 6); 
    const weekDays = Array.from({ length: 7 }, (_, index) => addDays(startOfThisWeek, index));

    const handleSelectDate = (day) => {
        setSelectedDate(day);
    };

    const handleAddTask = () => {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        if (newTask.trim() === '') return;
        addTask(formattedDate, { text: newTask, status: 'in-progress' });
        setNewTask('');
    };

    const selectedDayTasks = tasks[format(selectedDate, 'yyyy-MM-dd')] || [];

    return (
        <Box>
            <Box w={'100%'} textAlign={'center'} bg={'orange.400'} color={'white'} p={2} mb={4}>
                {format(startOfThisWeek, 'MMMM d, yyyy')} - {format(endOfThisWeek, 'MMMM d, yyyy')}
            </Box>

            <Box className='scroll-container' overflowX="auto" whiteSpace="nowrap" mb={4} p={2}>
                <HStack spacing={4}>
                    {weekDays.map((day, index) => (
                        <Button
                            key={index}
                            minWidth="100px"
                            colorScheme={isSameDay(day, selectedDate) ? 'blue' : 'gray'}
                            onClick={() => handleSelectDate(day)}
                        >
                            {format(day, 'EEEE')}
                        </Button>
                    ))}
                </HStack>
            </Box>

            <VStack align="stretch" spacing={4}>
            <Box bg="teal.100" p={4} borderRadius="md">
                            <Text>Tanlangan sana: {format(selectedDate, 'MMMM d, yyyy')}</Text>
                        </Box>
                <Input
                    placeholder="Yangi task qo'shing"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button colorScheme="teal" onClick={handleAddTask}>Task qo'shish</Button>

                {selectedDayTasks.map((task, index) => (
                    <HStack key={index} justify="space-between" borderWidth="1px" borderRadius="md" p={2}>
                        <Text textDecoration={task.status === 'done' ? 'line-through' : 'none'}>
                            {task.text}
                        </Text>
                        <HStack>
                            <Button size="sm" onClick={() => updateTaskStatus(format(selectedDate, 'yyyy-MM-dd'), index, task.status === 'done' ? 'in-progress' : 'done')}>
                                {task.status === 'done' ? 'Re-activate' : 'Complete'}
                            </Button>
                            <Button size="sm" colorScheme="red" onClick={() => deleteTask(format(selectedDate, 'yyyy-MM-dd'), index)}>
                                O'chirish
                            </Button>
                        </HStack>
                    </HStack>
                ))}
            </VStack>
        </Box>
    );
};

export default WeeklyTasks;
