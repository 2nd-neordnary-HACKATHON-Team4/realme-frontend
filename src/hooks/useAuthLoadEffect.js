// import {useEffect} from 'react';
// import {useRecoilState, useRecoilValue} from 'recoil';
// import {authState} from '../atoms/auth';
// import {firstState} from '../atoms/first';
// import {axiosInstance} from '../queries';
// import authStorage from '../storages/authStorage';
// import {isLoadingState} from '../atoms/isLoading';
// import {jobProfileState} from '../atoms/jobProfile';
// import jobStorage from '../storages/jobStorage';

// export default function useAuthLoadEffect() {
//   const [authUserState, setAuthUserState] = useRecoilState(authState);

//   useEffect(() => {
//     const fn = async () => {
//       const auth = await authStorage.get();

//       setAuthUserState({user: auth.memberResponseDto});
//       axiosInstance.defaults.headers.Authorization = `Bearer ${auth.token}`;
//       const profileUri = await jobStorage.get();
//       await setFirstScreenState({name: 'Home'});
//     };

//     fn();
//   }, [setFirstScreenState, setAuthUserState, setJobProfile]);
// }
