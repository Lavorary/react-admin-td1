import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from 'react';
import { useCreate,
  useNotify,
  useRefresh,
  Button,
  SimpleForm,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
  required,
  email } from 'react-admin';

interface QuickInternValue {
  firstname: string;
  lastname: string;
  email: string;
  managerId: number;
}

export const QuickInternCreate = () => {
  const [open, setOpen] = useState(false);
  const [create, {isLoading, error}] = useCreate();
  const notify = useNotify();
  const refresh=  useRefresh();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(error) return (
    <div style={{ color: '#ff4d4f', marginTop: '10px' }}>
              Error creating the intern
            </div>
  )

  const handleSubmit = async (values: QuickInternValue) => {
    try {
      await create('interns', {
        data: {
          ...values,
          department: '',
          isRemunerated: false,
          remuneration: 0
        }
      });

      notify('Intern created successfully', { type: 'success' });
      handleClose();
      refresh();
    } catch (error) {
      notify("Error, couldn't create the intern", { type: 'error' })
    }
  }

  return (
    <SimpleForm>
      <Button
        label="Quickly add a new Intern"
        onClick={handleOpen}
        sx={{
          backgroundColor: 'gray',
          color: 'white',
          marginBottom: '10px',
          '&:hover': {
            backgroundColor: '#40a9ff',
          }
        }}
      />

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Quick creation of an intern</DialogTitle>
        <DialogContent>
          <SimpleForm onSubmit={handleSubmit} toolbar={null}>
            <TextInput
              source="firstname"
              label="Firstname"
              validate={required()}
              fullWidth
              sx={{ marginTop: '10px' }}
            />
            <TextInput
              source="lastname"
              label="Lastname"
              validate={required()}
              fullWidth
            />
            <TextInput
              source="email"
              label="Email"
              validate={[required(), email()]}
              fullWidth
            />
            <ReferenceInput
              source="managerId"
              reference="employees"
              label="Manager"
              filter={{ online: true }}
              fullWidth
            >
              <AutocompleteInput
                optionText="firstname"
                validate={required()}
              />
            </ReferenceInput>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
              <Button label="Cancel" onClick={handleClose} />
              <Button
                label="create"
                type="submit"
                disabled={isLoading}
                sx={{
                  backgroundColor: '#52c41a',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#73d13d',
                  }
                }}
              />
            </div>
          </SimpleForm>
        </DialogContent>
      </Dialog>
    </SimpleForm>
  )
}