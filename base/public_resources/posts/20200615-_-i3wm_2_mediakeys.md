# \[i3\] 2. Mapping ThinkPad Media Keys

The first struggle I have with i3 was not able to utilize all of the top row media keys of the thinkpad. I will need to manually bind them individually. Looking for the corresponding key names is a pain as some of them didn't show up when I was running [xev](https://www.x.org/releases/X11R7.7/doc/man/man1/xev.1.xhtml) to capture them.

From left to right they are:

XF86AudioMute, XF86AudioLowerVolume, XF86AudioRaiseVolume, XF86AudioMicMute, XF86MonBrightnessDown, XF86MonBrightnessUp, XF86Display, XF86WLAN, XF86Tools, XF86Tools, XF86Search, XF86LaunchA, XF86Explorer

## Mapping Volume Controls

`amixer` is a lower level control compared to `pactl` IMO. `amixer` does give me more control over the sound cards but `pactl` seems to be the one that controls default output devices. To make life easier, I chose to bind `pactl` commands to volume controls to set volume of the "Default Output Device" so when I am plugging in USB Audio devices, it will always control the right device.

For **Mute** and **MicMute** though, I will use amixer to mute everything just in case.

I am using step size based on **dB** instead of percentage so I can ramp up the volume more quickly (or just for fun?)

## Mapping Brightness Control

Writing directly into `/sys/class/backlight/intel_backlight/brightness` works but not intuitive enough.

After trying out some potential control, I finally chose [brillo](https://gitlab.com/cameronnemo/brillo) to increase/decrease brightness exponentially.
$$
y = t^x
$$

## Mapping the Display Key

This one is tricky to do using custom scripts (Need to be a toggle) so I chose [xlayoutdisplay](https://github.com/alex-courtis/xlayoutdisplay) to detect all connected display and update the display configuration. However I do need to push the button to make it work when I am plugging/unplugging an external display though.

To change display layouts, I wrote a script to fix the relative position of the displays so I can run that from a dropdown terminal (There should be a better way):

```bash
xrandr --output DP-2-1 --mode 1920x1080 --pos 0x0 --rotation normal; xrandr --output eDP-1 --mode 1920x1080 --pos 0x1080 --rotation normal
```

### Mapping WLAN key

The WLAN key works out-of-the-box. So I decided to leave it as is.

## Mapping the other keys

I am mapping the rest of the keys to what I think is the most convenient to me:

1. **Tools** to summon the scratch pad which I am using as a dropdown terminal
2. **Search** to use `rofi` to run programs
3. The other two keys are used to switch workspace left and right

## Full Configuration

```bash
bindsym XF86AudioMute exec --no-startup-id amixer -q set Master toggle
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume $(pacmd info | grep "Default sink name" | cut -d ":" -f2- | xargs) +2dB
bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume $(pacmd info | grep "Default sink name" | cut -d ":" -f2- | xargs) -2dB
bindsym XF86AudioMicMute exec --no-startup-id amixer -q set Capture toggle

bindsym XF86MonBrightnessUp exec --no-startup-id brillo -A 5 -q # increase screen brightness
bindsym XF86MonBrightnessDown exec --no-startup-id brillo -U 5 -q # decrease screen brightness
bindsym XF86Display exec --no-startup-id xlayoutdisplay -d 100
#bindsym XF86WLAN exec --no-startup-id

bindsym XF86Tools scratchpad show 
bindsym ctrl+XF86Tools exec --no-startup-id xinput disable $(xinput list | grep Synaptics | awk '{print $5}' | cut -c 4-)
bindsym $mod+XF86Tools exec --no-startup-id xinput enable $(xinput list | grep Synaptics | awk '{print $5}' | cut -c 4-)
bindsym XF86Search exec --no-startup-id rofi -show run
bindsym XF86LaunchA workspace prev
bindsym XF86Explorer workspace next
```

