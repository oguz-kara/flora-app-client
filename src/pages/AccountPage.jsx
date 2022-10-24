import { getUsers, updateUser } from '../api/user';
import Flex from '../components/Flex';
import { FormContainer } from '../components/Container';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../style/account-page.scss';
import { Link } from 'react-router-dom';

export default function AccountPage({ user }) {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [userState, setUserState] = useState(user);
  const initialUser = userState;

  return (
    <div className="account-container">
      <Link className="close-account-btn" to="/">
        Close account page
      </Link>
      <h2 className="section-header-1">
        Account
        <div className="underline"></div>
      </h2>
      <div className="container-item">
        {!editName ? (
          <>
            <div>
              <h4 className="section-header-3">User name </h4>
            </div>
            <div className="flex justify-between">
              <h5 className="mr-2">{userState.name}</h5>
              <button
                className="edit-button"
                onClick={(e) => setEditName(true)}
              >
                edit
              </button>
            </div>
          </>
        ) : (
          <FormContainer
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await updateUser(user);
            }}
          >
            <TextBox
              placeholder="Enter name"
              value={userState.name}
              onChange={(e) => {
                setUserState((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
            />
            <Flex>
              <Button type="submit" variant="outlined" className="nice-button">
                Save
              </Button>
              <Button
                variant="danger-outlined"
                className="nice-button danger"
                onClick={() => setEditName(false)}
                type="button"
                disabled={userState.name === initialUser.name}
              >
                Cancel
              </Button>
            </Flex>
          </FormContainer>
        )}
      </div>
      {!editEmail ? (
        <div className="container-item">
          <>
            <div>
              <h4 className="section-header-3">Email</h4>
            </div>
            <div className="flex justify-between">
              <h5 className="mr-2">{userState.email}</h5>
              <button
                className="edit-button"
                onClick={() => {
                  if (editEmail != true) setEditEmail(true);
                }}
              >
                edit
              </button>
            </div>
          </>
        </div>
      ) : (
        <FormContainer>
          <TextBox
            value={userState.emai}
            onChange={(e) =>
              setUserState((prev) => {
                return { ...prev, emai: e.target.value };
              })
            }
            placeholder="Enter email"
            defaultValue={userState.email}
          />
          <div className="flex">
            <Button
              disabled={userState.email === initialUser.email}
              type="submit"
              variant="outlined"
              className="nice-button"
            >
              Save
            </Button>
            <Button
              variant="danger-outlined"
              className="nice-button danger"
              onClick={() => setEditEmail(false)}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </FormContainer>
      )}
    </div>
  );
}
