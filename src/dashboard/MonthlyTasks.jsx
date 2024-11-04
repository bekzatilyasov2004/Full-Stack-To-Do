import { Box, VStack, HStack, IconButton, Text, Input, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { format, addDays, subDays, startOfMonth, endOfMonth, isSameDay } from 'date-fns';
import { useTasks } from '../provider/TasksContext';

const MonthlyTasks = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [newTask, setNewTask] = useState('');
    const { tasks, addTask, deleteTask, updateTaskStatus } = useTasks();

    useEffect(() => {
        const startDay = startOfMonth(currentDate);
        const endDay = endOfMonth(currentDate);
        const daysArray = [];
        for (let day = startDay; day <= endDay; day = addDays(day, 1)) {
            daysArray.push(day);
        }
        setDaysInMonth(daysArray);
    }, [currentDate]);

    const handlePrev = () => {
        setVisibleIndex(prev => (prev - 1 >= 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setVisibleIndex(prev => (prev + 5 < daysInMonth.length ? prev + 1 : prev));
    };

    const handleSelectDate = (day) => {
        setSelectedDate(day);
        setNewTask('');
    };

    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        addTask(formattedDate, { text: newTask, status: 'in-progress' });
        setNewTask('');
    };

    return (
        <Box>
            <Box w={'100%'} textAlign={'center'} bg={'green.400'} color={'white'} p={2} mb={4}>
                {format(currentDate, 'MMMM yyyy')}
            </Box>
            <HStack overflowX="auto" className='scroll-container' whiteSpace="nowrap" justify="space-between" alignItems="center">
                <IconButton aria-label="Previous days" icon={<ArrowLeftIcon />} onClick={handlePrev} />
                <HStack>
                    {daysInMonth.slice(visibleIndex, visibleIndex + 5).map((day, index) => {
                        const isToday = isSameDay(day, new Date());
                        const isSelected = isSameDay(day, selectedDate);
                        return (
                            <Box
                                key={index}
                                bg={isSelected ? 'blue.400' : isToday ? 'green.300' : 'gray.200'}
                                color={isSelected ? 'white' : 'black'}
                                w={'100px'}
                                h={'50px'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                borderRadius="md"
                                cursor="pointer"
                                onClick={() => handleSelectDate(day)}
                            >
                                <Text>{format(day, 'd')}</Text>
                            </Box>
                        );
                    })}
                </HStack>
                <IconButton aria-label="Next days" icon={<ArrowRightIcon />} onClick={handleNext} />
            </HStack>

            <VStack align="stretch" spacing={4} mt={4}>
                {selectedDate && (
                    <>
                        <Box bg="teal.100" p={4} borderRadius="md">
                            <Text>Tanlangan sana: {format(selectedDate, 'MMMM d, yyyy')}</Text>
                        </Box>
                        <Box>
                            <Input
                                placeholder="Yangi task qo'shing"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                mb={2}
                            />
                            <Button onClick={handleAddTask} colorScheme="green" mb={4}>
                                Task qo'shish
                            </Button>
                        </Box>
                        {tasks[format(selectedDate, 'yyyy-MM-dd')] &&
                            tasks[format(selectedDate, 'yyyy-MM-dd')].map((task, index) => (
                                <HStack key={index} justify="space-between" bg="gray.100" p={2} borderRadius="md">
                                    <Text textDecoration={task.status === 'done' ? 'line-through' : 'none'}>
                                        {task.text}
                                    </Text>
                                    <HStack>
                                        <Button
                                            size="xs"
                                            colorScheme={task.status === 'done' ? 'blue' : 'orange'}
                                            onClick={() =>
                                                updateTaskStatus(format(selectedDate, 'yyyy-MM-dd'), index, 
                                                task.status === 'done' ? 'in-progress' : 'done')}
                                        >
                                            {task.status === 'done' ? 'Re-activate' : 'Complete'}
                                        </Button>
                                        <Button colorScheme="red" size="xs" onClick={() => deleteTask(format(selectedDate, 'yyyy-MM-dd'), index)}>
                                            O'chirish
                                        </Button>
                                    </HStack>
                                </HStack>
                            ))}
                    </>
                )}
            </VStack>
        </Box>
    );
};

export default MonthlyTasks;
