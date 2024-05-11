using System.Collections;
using UnityEngine;

namespace ClassLibrary1
{
    public class BeatSaberTest : MonoBehaviour
    {
        IEnumerator Start()
        {
            Debug.Log("Start1");
            Test();
            yield return new WaitForSeconds(2.5f);

            Debug.Log("Start2");
        }

        void Update()
        {
            
        }

        public void Test()
        {
            //var output = Oculus.Platform.Application.GetVersion();
            //output.OnComplete(callback);
        }

        //private void callback(Message<ApplicationVersion> message)
        //{
        //    Debug.Log("callback");
        //    var scene = SceneManager.GetActiveScene();
        //}
    }

    public class MainClass
    {
        public void Main()
        {
            Debug.Log("Main Class");
        }
    }
}
