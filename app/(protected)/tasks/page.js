"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Heatmapb from "@/app/components/Heatmapa";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Tasks list has been updated:", tasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const handleDeleteTask = (taskID) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskID));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "linear-gradient(180deg, #f0f0f0 0%, #dcdcdc 100%)",
        py: 8,
        px: 2,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 5,
            letterSpacing: "-0.5px",
            color: "#1a1a1a",
          }}
        >
          Task List
        </Typography>

        {/* Input Area */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            mb: 4,
            bgcolor: "#fafafa",
            p: 2,
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Create a new task..."
            slotProps={{
              input: {
                sx: {
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  "& fieldset": { borderColor: "#999" },
                  "&:hover fieldset": { borderColor: "#555" },
                  "&.Mui-focused fieldset": { borderColor: "#333" },
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleAddTask}
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#333",
              color: "white",
              border: "1px solid #333",
              textTransform: "none",
              fontWeight: 500,
              px: 3,
              "&:hover": {
                bgcolor: "#555",
                borderColor: "#555",
              },
            }}
          >
            Add
          </Button>
        </Box>

        {/* Task List */}
        <Paper
          elevation={1}
          sx={{
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          {tasks.length === 0 ? (
            <Typography
              variant="body2"
              sx={{
                color: "#777",
                textAlign: "center",
                py: 4,
              }}
            >
              No tasks yet — start by adding one above.
            </Typography>
          ) : (
            <List disablePadding>
              {tasks.map((task, index) => (
                <Box key={task.id}>
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDeleteTask(task.id)}
                        sx={{
                          color: "#555",
                          "&:hover": {
                            color: "#fff",
                            bgcolor: "#333",
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{
                      px: 3,
                      py: 1.5,
                      transition: "background-color 0.2s ease, color 0.2s ease",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    }}
                  >
                    <ListItemText
                      primary={task.text}
                      slots={{
                        primary: (props) => (
                          <Typography
                            {...props}
                            sx={{
                              wordBreak: "break-word",
                              color: "#222",
                            }}
                          />
                        ),
                      }}
                    />
                  </ListItem>
                  {index < tasks.length - 1 && (
                    <Divider sx={{ borderColor: "#eee" }} />
                  )}
                </Box>
              ))}
            </List>
          )}
        </Paper>
        
      </Container>
    </Box>
  );
}
