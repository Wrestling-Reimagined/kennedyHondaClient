import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material';
import { submitLead, LeadSubmission } from '../services/api';

const LeadForm = () => {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
    setSuccess(false);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await submitLead(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to submit your information. Please try again later.');
      console.error('Error submitting lead:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: { xs: 3, md: 5 }, 
        maxWidth: 700, 
        mx: 'auto',
        borderRadius: 3,
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #F9FAFB 100%)',
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        align="center" 
        sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}
      >
        Get In Touch
      </Typography>
      <Typography 
        variant="h6" 
        component="p" 
        color="text.secondary" 
        align="center" 
        sx={{ mb: 4 }}
      >
        Ready to find your perfect Honda? Let's start the conversation. 
        Fill out the form below and I'll personally reach out to help you find the vehicle that's right for you.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} data-label="error-alert">
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 3 }} data-label="success-alert">
          Thank you for your interest! We'll contact you soon.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} data-label="lead-form">
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
          data-label="name-input"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
          data-label="email-input"
        />
        <TextField
          fullWidth
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          margin="normal"
          data-label="phone-input"
        />
        <TextField
          fullWidth
          label="Message (Optional)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          margin="normal"
          data-label="message-input"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          disabled={loading}
          sx={{ mt: 3, py: 1.5 }}
          data-label="submit-button"
        >
          {loading ? <CircularProgress size={24} /> : 'Submit'}
        </Button>
      </Box>
    </Paper>
  );
};

export default LeadForm;

