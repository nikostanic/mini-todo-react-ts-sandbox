import { useState, useEffect } from 'react';
import { fetchTasks } from '../services/taskService';
import type { Task } from '../types/task';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
        } catch (err) {
            setError('Failed to fetch tasks: ' + (err instanceof Error ? err.message : String(err)));
        } finally {
            setLoading(false);
        }
    }
    // Call the loadTasks function to fetch tasks when the component mounts
    loadTasks();
  }, []);
  return { tasks, loading, error };
}